"use client";

import { useReportWebVitals } from "next/web-vitals";

export type WebVitalsProps = {
  analyticsPath: string;
};

export function WebVitals({ analyticsPath }: WebVitalsProps) {
  useReportWebVitals((metric) => {
    const body = JSON.stringify(metric);
    const url = `https://reportd.natwelch.com${analyticsPath}`;

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: "POST", keepalive: true });
    }
  });

  return <></>;
}
