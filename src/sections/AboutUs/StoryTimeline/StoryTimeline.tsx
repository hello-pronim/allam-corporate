import React, { useState } from "react";
import classnames from "classnames";
import { Document, Page, pdfjs } from "react-pdf";
import Icon from "@components/Icons/Icons";
import { useWindowSize } from "@hooks/useWindowSize";

import styles from "./StoryTimeline.module.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const StoryTimeline = () => {
  const { width, height } = useWindowSize();
  const [numPages, setNumPages] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageTwo, setPageTwo] = useState<any>(null);

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }) => {
    setNumPages(numPages);
  };

  const changePage = (offset: any) => {
    setFadeIn(false);
    if (pageNumber + offset > numPages) {
      setPageNumber(numPages);
      if (numPages + 1 <= numPages) {
        setPageTwo(numPages + 1);
      } else {
        setPageTwo(null);
      }
    } else if (pageNumber + offset <= 0) {
      setPageNumber(1);
      setPageTwo(null);
    } else {
      setPageNumber((pageNumber) => {
        if (pageNumber + offset + 1 <= numPages) {
          setPageTwo(pageNumber + offset + 1);
        } else {
          setPageTwo(null);
        }
        return pageNumber + offset;
      });
    }
  };

  const previousPage = () => {
    changePage(width < 768 ? -1 : -2);
  };

  const nextPage = () => {
    if (pageNumber === 1) {
      changePage(1);
    } else {
      changePage(width < 768 ? 1 : 2);
    }
  };

  return (
    <div className={styles.storyTimeline}>
      <div className={styles.storyTimelineWrapper}>
        <div className={styles.storyTimelineContent}>
          <div className={styles.pdf}>
            <Document
              loading="Loading..."
              options={options}
              file={"/assets/pdf/Allam-orporate-Profile-2021.pdf"}
              onLoadSuccess={onDocumentLoadSuccess}
              className={styles.document}
            >
              <Page
                pageNumber={pageNumber}
                className={classnames(styles.page)}
                onRenderSuccess={() => {
                  setFadeIn(true);
                }}
              >
                <div
                  className={classnames(styles.fade, { [styles.hide]: fadeIn })}
                />
                <div
                  onClick={pageNumber > 1 ? previousPage : () => {}}
                  className={classnames(styles.previousHover, {
                    [styles.firstPage]: pageNumber <= 1,
                  })}
                />
              </Page>
              {width >= 768 && pageTwo && (
                <Page
                  pageNumber={pageTwo}
                  className={classnames(styles.page, styles.pageTwo)}
                  onRenderSuccess={() => {
                    setFadeIn(true);
                  }}
                >
                  <div
                    className={classnames(styles.fade, {
                      [styles.hide]: fadeIn,
                    })}
                  />
                  <div
                    onClick={pageNumber + 1 < numPages ? nextPage : () => {}}
                    className={classnames(styles.nextHover, {
                      [styles.firstPage]: pageNumber <= 1,
                    })}
                  />
                </Page>
              )}
              {!pageTwo && <div className={classnames(styles.page)}></div>}
            </Document>
            {pageNumber > 1 && (
              <button
                className={classnames(styles.button, styles.prev, {
                  [styles.last]: pageNumber >= numPages,
                })}
                onClick={previousPage}
              >
                <Icon type="pdf-chevron-right" />
              </button>
            )}
            {pageNumber + 1 < numPages && (
              <button
                className={classnames(styles.button, styles.next, {
                  [styles.first]: pageNumber <= 1,
                })}
                onClick={nextPage}
              >
                <Icon type="pdf-chevron-right" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTimeline;
