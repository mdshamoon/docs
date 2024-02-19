import React from "react";
import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    console.log(siteConfig);
    return (
        <Redirect
            to={`${siteConfig.customFields.baseUrlRedirect}/docs/intro`}
        />
    );
}
