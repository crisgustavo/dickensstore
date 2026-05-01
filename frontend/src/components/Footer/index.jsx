import { Link } from 'react-router-dom';
import { Dev, Grid, Container, SocialsGrid } from './styles';
import { Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material';

import mercadopago from '../../assets/mercadopago_new.png';

export function Footer() {
  return (
    <main>
      <Grid>
        <Container>
          <h3>Institucional</h3>
          <Link to='/quem-somos'>Quem Somos</Link>
          <Link to='/politica-de-privacidade'>Política de Privacidade</Link>
          <Link to='/'>
            <WhatsApp sx={{ width: '16px', marginRight: '2px' }} /> Contato
          </Link>
        </Container>
        <Container>
          <h3>Central de Ajuda</h3>
          <Link>Perguntas Frequentes</Link>
          <Link>Nossas Garantias</Link>
          <Link>Troca e Devolução</Link>
          <Link>Termos de uso</Link>
        </Container>
        <Container>
          <h3>Acompanhe nossas Redes</h3>
          <SocialsGrid>
            <Instagram />
            <Facebook />
            <Twitter />
          </SocialsGrid>
          <img src={mercadopago} className='mercado-pago' />
        </Container>
      </Grid>
      <Dev>
        Desenvolvido por Cristiano Gustavo ® - Todos os diretos reservados
      </Dev>
    </main>
  );
}
