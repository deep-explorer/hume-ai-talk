import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export const Footer = () => {
  return (
    <FlowbiteFooter container className="fixed bottom-0">
      <FooterCopyright href="#" by="NeatTalk" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </FlowbiteFooter>
  );
};
