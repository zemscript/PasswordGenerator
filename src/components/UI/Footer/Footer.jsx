import "react";
import { Ftr, FtrList, FtrItem, FtrLink } from "./FooterStyle";
function Footer() {
  return (
    <Ftr>
      <FtrList>
        <FtrItem>
          <FtrLink href="https://github.com/zemscript">GitHub | zemscript</FtrLink>
        </FtrItem>
      </FtrList>
    </Ftr>
  );
}

export default Footer;
