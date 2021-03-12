import { newSpecPage } from "@stencil/core/testing";
import { DiscourseEmbedTopics } from "../discourse-embed-topics";

describe("discourse-embed-topics", () => {
    it("renders", async () => {
        const page = await newSpecPage({
            components: [DiscourseEmbedTopics],
            html: `<discourse-embed-topics></discourse-embed-topics>`,
        });
        expect(page.root).toEqualHtml(`
      <discourse-embed-topics>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </discourse-embed-topics>
    `);
    });
});