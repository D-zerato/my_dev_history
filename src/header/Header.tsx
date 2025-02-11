import React, { useEffect } from 'react';
import { AppBar, Tabs, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useFindUser } from './header.event';
import { useAtom, useSetAtom } from 'jotai';
import { UserAtom } from './header.atom';
import { ProjectQdoAtom } from '../page/project/project.atom';

// 스타일 정의
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#121212',
  boxShadow: 'none',
  padding: '32px 0',
  alignItems: 'center',
});

const Title = styled(Typography)({
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: '8px',
});

const StyledTabs = styled(Tabs)({
  color: '#fff',
});

const LinkTab = React.forwardRef<HTMLAnchorElement, { label: string; to: string }>((props, ref) => {
  const { label, to } = props;
  return (
    <Tab
      component={Link}
      to={to}
      label={label}
      ref={ref}
      sx={{
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        '&.Mui-selected': {
          color: '#d3d3d3', // 선택된 탭의 글자 색상을 회색으로 변경
        },
      }}
    />
  );
});

const Header = () => {
  const location = useLocation();
  const { id } = useParams<{ id?: string }>();
  const { data: userData, isLoading: isUserDataLoading } = useFindUser(id || '');
  const setUser = useSetAtom(UserAtom);
  const [projectQdo, setProjectQdo] = useAtom(ProjectQdoAtom);

  useEffect(() => {
    if (!!userData && !isUserDataLoading && !!id) {
      setUser(userData);
      setProjectQdo({ ...projectQdo, userId: id });
    }
  }, [userData, isUserDataLoading, setUser, id, setProjectQdo]);

  const getValueFromPath = () => {
    if (location.pathname.endsWith('/projects')) return 0;
    if (location.pathname.endsWith('/career')) return 1;
    if (location.pathname.endsWith('/about')) return 2;
    return false;
  };

  const [value, setValue] = React.useState(getValueFromPath());

  React.useEffect(() => {
    setValue(getValueFromPath());
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledAppBar position="static">
      <Title>MyDevHistory</Title>
      <StyledTabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            backgroundColor: '#d3d3d3', // 선택된 탭 밑줄 색상을 회색으로 변경
          },
        }}
      >
        <LinkTab label="projects" to={`/${id}/projects`} />
        <LinkTab label="career" to={`/${id}/career`} />
        <LinkTab label="about" to={`/${id}/about`} />
      </StyledTabs>
    </StyledAppBar>
  );
};

export default Header;
