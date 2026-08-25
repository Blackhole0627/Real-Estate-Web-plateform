"use client";

import { useEffect } from "react";
import { metaTrack } from "@/lib/track";

/** Fires the Meta ViewContent event once per property page view. */
export default function TrackViewContent({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  useEffect(() => {
    metaTrack("ViewContent", {
      content_ids: [slug],
      content_type: "product",
      content_name: name,
    });
  }, [slug, name]);
  return null;
}
