import {
  BlogIcon,
  ConditionsIcon,
  ContactIcon,
  Facebook_Icon,
  FacturaIcon,
  FaqsIcon,
  FooterColumns,
  FooterItem,
  FooterSection,
  Instagram_Icon,
  ItemText,
  OptionsFooter,
  OptionsFooter_SM,
  PrivIcon,
  SectionTitle,
  Wrapper,
  ResponsiveWrapper,
  LineSM,
  FooterBottom,
  ItemBotom,
  ItemTextBotom,
} from './footer.styles'
import Image from 'next/image'

function Footer() {
  return (
    <FooterSection>
      <Wrapper>
        <FooterColumns>
          <OptionsFooter>
            <SectionTitle>Información</SectionTitle>
            <FooterItem>
              <BlogIcon />
              <ItemText>Blog</ItemText>
            </FooterItem>
            <FooterItem>
              <FaqsIcon />
              <ItemText>Faqs</ItemText>
            </FooterItem>
            <FooterItem>
              <ContactIcon />
              <ItemText>Contacto</ItemText>
            </FooterItem>
          </OptionsFooter>
        </FooterColumns>
        <FooterColumns>
          <SectionTitle>
            <Image
              src="/assets/navbar/footer/logo_blanco.png"
              height={39}
              width={119}
            ></Image>
          </SectionTitle>
          <ItemText>Siguenos</ItemText>
          <OptionsFooter_SM>
            <Facebook_Icon />
            <Instagram_Icon />
          </OptionsFooter_SM>
        </FooterColumns>
        <FooterColumns>
          <OptionsFooter>
            <SectionTitle>Ayuda</SectionTitle>
            <FooterItem>
              <FacturaIcon />
              <ItemText>Facturación</ItemText>
            </FooterItem>
            <FooterItem>
              <PrivIcon />
              <ItemText>Aviso de Privacidad</ItemText>
            </FooterItem>
            <FooterItem>
              <ConditionsIcon />
              <ItemText>Términos y Condiciones</ItemText>
            </FooterItem>
          </OptionsFooter>
        </FooterColumns>
      </Wrapper>
      <ResponsiveWrapper>
        <SectionTitle>
          <Image
            src="/assets/navbar/footer/logo_blanco.png"
            height={39}
            width={119}
          ></Image>
        </SectionTitle>
        <OptionsFooter>
          <FooterItem>
            <ItemText>Blog</ItemText>
          </FooterItem>
          <FooterItem>
            <ItemText>Facturación</ItemText>
          </FooterItem>
        </OptionsFooter>
        <LineSM />
        <SectionTitle>Redes Sociales</SectionTitle>
        <OptionsFooter_SM>
          <Facebook_Icon />
          <Instagram_Icon />
        </OptionsFooter_SM>
        <LineSM />
        <FooterBottom>
          <ItemBotom>
            <ItemTextBotom>FAQS</ItemTextBotom>
          </ItemBotom>
          <ItemBotom>
            <ItemTextBotom>Aviso de Privacidad</ItemTextBotom>
          </ItemBotom>
          <ItemBotom>
            <ItemTextBotom>Contacto</ItemTextBotom>
          </ItemBotom>
          <ItemBotom>
            <ItemTextBotom>Términos y Condiciones</ItemTextBotom>
          </ItemBotom>
        </FooterBottom>
      </ResponsiveWrapper>
    </FooterSection>
  )
}

export default Footer
