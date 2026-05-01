import { useEffect, useState } from 'react';
import { Header } from './styles';

import {
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';

import logoMarca from '../../assets/LogoMarcaWhite.svg';
import logo from '../../assets/LogoWhite.svg';
import { Search } from '@mui/icons-material';

export function Landing() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsCollapsed(false);
      } else {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCollapsed]);

  return (
    <main>
      <Header $isCollapsed={isCollapsed}>
        <img src={isCollapsed && logoMarca} />
        <FormControl variant='outlined' sx={{ width: '50%' }}>
          <InputLabel
            htmlFor='component-outlined'
            sx={{ top: `${!isCollapsed && '0 !important'}` }}
          >
            Buscar
          </InputLabel>
          <OutlinedInput
            id='component-outlined'
            label='Buscar'
            placeholder='Buscar por Título, Autor, Gênero ou Coleção'
            startAdornment={
              !isCollapsed && (
                <InputAdornment position='start'>
                  <img src={logo} style={{ width: '16px' }} />
                </InputAdornment>
              )
            }
            endAdornment={
              <InputAdornment position='end'>
                <Search />
              </InputAdornment>
            }
          />
        </FormControl>
      </Header>
      <div style={{ minHeight: '2000px' }}></div>
    </main>
  );
}
