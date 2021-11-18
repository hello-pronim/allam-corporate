import capitalize from "lodash/capitalize";

import { getUri } from "@utils/getUri";

export const getBreadcrumbs = (path: string) => {
  const slugs = path.split("/");
  slugs.shift();

  const breadcrumbs = slugs.map((slug: string, index: number) => {
    let title = capitalize(slug).replace(/-/g, " ");
    const subSlugs = slugs.slice(0, index + 1);
    let uri = subSlugs.join("/");

    if (title.includes("?")) {
      title = title.split("?")[0];
    }

    if (uri.includes("?")) {
      uri = uri.split("?")[0];
    }

    uri = getUri(uri);

    return {
      title,
      slug,
      uri,
    };
  });

  return breadcrumbs;
};
