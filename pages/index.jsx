import { auto } from "@atomico/react";
import { menuModal, menuHeader } from "../site";
import {
  SiteIsotype,
  SiteGrid,
  SiteText,
  SiteLink,
  SiteHeader,
  SiteEye,
  SiteMenu,
} from "@atomico/site";
import Image from "next/image";

const ReactSiteIsotype = auto(SiteIsotype);
const ReactSiteGrid = auto(SiteGrid);
const ReactSiteText = auto(SiteText);
const ReactSiteLink = auto(SiteLink);
const ReactSiteHeader = auto(SiteHeader);
const ReactSiteEye = auto(SiteEye);
const ReactSiteMenu = auto(SiteMenu);

export default function Home() {
  return (
    <>
      <ReactSiteHeader>
        <div slot="logo">
          <Image src="/logo.svg" alt="logo" width="180" height="40" />
        </div>
        {menuHeader.map((data, id) => (
          <ReactSiteLink
            key={id + ""}
            href={data.href}
            slot="link"
            target="_blank"
          >
            {data.title}
          </ReactSiteLink>
        ))}
        <ReactSiteMenu slot="action">
          <ReactSiteEye className="eye"></ReactSiteEye>
          <div className="menu">
            <div className="menu-group">
              {menuModal.map((data, id) => (
                <div key={id + ""}>
                  <ReactSiteText elegant>{data.title}</ReactSiteText>
                  <div className="menu-items">
                    {data.items.map((data, id) => (
                      <ReactSiteLink
                        key={id + ""}
                        href={data.href}
                        slot="link"
                        target="_blank"
                      >
                        {data.title}
                      </ReactSiteLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ReactSiteMenu>
      </ReactSiteHeader>
      <ReactSiteIsotype>
        <ReactSiteGrid gap={3} centered>
          <Image src="/logo.svg" alt="logo" width="270" height="64" />
          <ReactSiteText elegant>WEBCOMPONENTS</ReactSiteText>
          <ReactSiteText textCenter>
            Create interfaces with code
            <br /> simple, fast and light
          </ReactSiteText>
        </ReactSiteGrid>
      </ReactSiteIsotype>
    </>
  );
}
