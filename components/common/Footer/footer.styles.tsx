import styled from 'styled-components'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import MailIcon from '@material-ui/icons/Mail'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import ReceiptIcon from '@material-ui/icons/Receipt'
import LockIcon from '@material-ui/icons/Lock'
import SubjectIcon from '@material-ui/icons/Subject'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

export const FooterSection = styled.footer`
  background: #000000;
  width: 100%;
  padding: 40px 0 20px; 0;
`

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    display: none;
  }
`

export const ResponsiveWrapper = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const FooterColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  justify-content: center;
  align-items: center;
`

export const SectionTitle = styled.ol`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  padding: 0;
`

export const OptionsFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 800px) {
    align-items: center;
    margin-top: 1em;
  }
`

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ItemText = styled.h3`
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin: 0.5em;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`

export const BlogIcon = styled(RssFeedIcon)`
  color: white;
`

export const ContactIcon = styled(MailIcon)`
  color: white;
`

export const FaqsIcon = styled(QuestionAnswerIcon)`
  color: white;
`

export const FacturaIcon = styled(ReceiptIcon)`
  color: white;
`

export const PrivIcon = styled(LockIcon)`
  color: white;
`

export const ConditionsIcon = styled(SubjectIcon)`
  color: white;
`

export const Facebook_Icon = styled(FacebookIcon)`
  color: white;
  margin: 5px 10px;
`

export const Instagram_Icon = styled(InstagramIcon)`
  color: white;
  margin: 5px 10px;
`

export const OptionsFooter_SM = styled(OptionsFooter)`
  flex-direction: row;
`

export const LineSM = styled.span`
  width: 80%;
  border-top: 1px solid #fff;
  height: 0px;
  margin: 1rem 0;
`
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ItemTextBotom = styled(ItemText)`
  font-size: 15px;
`
export const ItemBotom = styled.div`
  width: 50%;
  text-align: center;
`
