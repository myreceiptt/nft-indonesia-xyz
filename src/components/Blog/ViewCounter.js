"use client";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect, useMemo, useState } from "react";

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  const supabase = useMemo(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
      return null;
    }
    return createBrowserClient(supabaseUrl, supabaseKey);
  }, []);

  useEffect(() => {
    if (!supabase || noCount) return;
    const incrementView = async () => {
      try {
        const { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });

        if (error) {
          console.error("Error incrementing view count inside try block:", error);
        }
      } catch (error) {
        console.error("An error occurred while incrementing the view count:", error);
      }
    };

    incrementView();
  }, [slug, noCount, supabase]);

  useEffect(() => {
    if (!supabase) return;
    const getViews = async () => {
      try {
        const { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error) {
          console.error("Error incrementing view count inside try block:", error);
        }

        setViews(data ? data.count : 0);
      } catch (error) {
        console.error("An error occurred while incrementing the view count:", error);
      }
    };

    getViews();
  }, [slug, supabase]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
