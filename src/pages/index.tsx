import React from "react";
import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Redirect
            to={`${siteConfig.customFields.baseUrlRedirect}/intro`}
        />
    );
}
