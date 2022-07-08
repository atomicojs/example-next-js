import { auto } from "@atomico/react";
import { menuModal, menuHeader } from "../site";
import {
  SiteIsotype,
  SiteGrid,
  SiteText,
  SiteLink,
  SiteHeader,
} from "@atomico/site";
import Image from "next/image";

const ReactSiteIsotype = auto(SiteIsotype);
const ReactSiteGrid = auto(SiteGrid);
const ReactSiteText = auto(SiteText);
const ReactSiteLink = auto(SiteLink);
const ReactSiteHeader = auto(SiteHeader);

export default function Home() {
  return (
    <>
      <ReactSiteHeader>
        <div slot="logo">
          <Image src="/logo.svg" alt="logo" width="180" height="40" />
        </div>
        {menuHeader.map((data) => (
          <ReactSiteLink href={data.href} slot="link" target="_blank">
            {data.title}
          </ReactSiteLink>
        ))}
        <site-menu slot="action">
          <site-eye class="eye"></site-eye>
          <div class="menu">
            <div class="menu-group">
              {menuModal.map((data) => (
                <div>
                  <site-text elegant>{data.title}</site-text>
                  <div class="menu-items">
                    {data.items.map((data) => (
                      <site-link href={data.href} slot="link" target="_blank">
                        {data.title}
                      </site-link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </site-menu>
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
