import React from "react";
import Layout from "../components/Layout";

const LegalPage = ({ title }) => {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-4">This is a placeholder page. Provide your own {title.toLowerCase()} content to replace this mocked copy.</p>
          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non varius dolor. Nulla facilisi.</p>
            <p>Aliquam erat volutpat. Nulla commodo, nibh sit amet consequat aliquet, sapien sem efficitur arcu, at egestas leo lectus at justo.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel leo nec lectus dignissim tincidunt.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Privacy = () => <LegalPage title="Privacy Policy" />;
export const Terms = () => <LegalPage title="Terms of Service" />;