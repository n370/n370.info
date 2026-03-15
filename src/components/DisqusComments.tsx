import { DiscussionEmbed } from "disqus-react";
import { FC } from "react";

export const DisqusComments: FC<any> = ({ post }) => {
  return (
    <div id="disqus_thread">
      <DiscussionEmbed
        shortname="n370" // Replace with your actual shortname
        config={{
          url: `https://n370.info/blog/${post.path}`, // The full URL of the current page
          identifier: post.path, // A unique identifier for the thread
          title: post.metadata.Title, // The title of the post
        }}
      />
    </div>
  );
};
