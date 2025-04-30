// src/components/Header/index.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { DigDirButton as Button } from "componentlibrary";
import { Tabs } from "@digdir/designsystemet-react";
import styles from "./styles.module.css";

export interface HeaderProps {
  logo: React.ReactNode;
  links: { href: string; label: string; id: string }[];
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
  variant?: "default" | "conference";
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  links,
  buttonLabel,
  onButtonClick,
  className,
  variant = "default",
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const findInitialTab = () => {
    let currentTab = links.find((link) => link.href === pathname);
    if (!currentTab) {
      currentTab = links.find(
        (link) => pathname.startsWith(link.href) && link.href !== "/",
      );
    }
    return currentTab?.id || links[0]?.id || "";
  };

  const [activeTab, setActiveTab] = useState(findInitialTab());

  useEffect(() => {
    setActiveTab(findInitialTab());
  }, [pathname, links]);

  const handleTabChange = (tabId: string) => {
    const selectedLink = links.find((link) => link.id === tabId);
    if (selectedLink && selectedLink.href) {
      router.push(selectedLink.href);
    }
  };

  return (
    <header className={`${styles.header} ${className || ""}`}>
      <div className={styles.headerContentWrapper}>
        <div className={styles.headerLeft}>{logo}</div>

        {variant === "default" && (
          <>
            <div className={styles.headerCenter}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                data-size="md"
                data-color="neutral"
              >
                <Tabs.List>
                  {links.map((link) => (
                    <Tabs.Tab key={link.id} value={link.id}>
                      <p className={styles.tabText}>{link.label}</p>
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs>
            </div>
            <div className={styles.headerRight}>
              {buttonLabel && onButtonClick && (
                <Button variant="primary" onClick={onButtonClick}>
                  {buttonLabel}
                </Button>
              )}
            </div>
          </>
        )}

        {variant === "conference" && (
          <>
            <div className={styles.headerRight}>
              <Tabs
                data-color="neutral"
                value={activeTab}
                onChange={handleTabChange}
                data-size="md"
              >
                <Tabs.List>
                  {links.map((link) => (
                    <Tabs.Tab key={link.id} value={link.id}>
                      <p className={styles.tabText}>{link.label}</p>
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

Header.displayName = "Header";
export default Header;
