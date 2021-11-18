import React, { Fragment, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getBreadcrumbs } from "@utils/getBreadcrumbs";
import styles from "./BreadCrumb.module.scss";

export interface IBreadCrumbProps {}

type Breadcrumb = {
  title: string;
  slug: string;
  uri: string;
};

const BreadCrumb = ({}: IBreadCrumbProps) => {
  const router = useRouter();

  const breadcrumbs = useMemo(
    () => getBreadcrumbs(router.asPath),
    [router.asPath]
  );

  return (
    <div className={styles.breadCrumb}>
      <div className={styles.breadCrumbWrapper}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb: Breadcrumb) => (
            <Fragment key={breadcrumb.slug}>
              <li>
                <Link href={breadcrumb.uri}>
                  <a>{breadcrumb.title}</a>
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
