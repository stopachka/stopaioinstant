import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/components/prism-clojure";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism-solarizedlight.css";

// --------- 
// Footnotes 
// Inspo: https://github.com/markedjs/marked/issues/1562#issuecomment-1213367729

const footnoteMatch = /^\[\^([^\]]+)\]:([\s\S]*)$/;
const referenceMatch = /\[\^([^\]]+)\](?!\()/g;
const referencePrefix = "f";
const footnotePrefix = "n";
const footnoteTemplate = (ref: string, text: string) => {
  return `<div><a id="${footnotePrefix}-${ref}" href="#${referencePrefix}-${ref}">[${ref}]</a> ${text}</div>`;
};
const referenceTemplate = (ref: string) => {
  return `<sup id="${referencePrefix}-${ref}"><a href="#${footnotePrefix}-${ref}">[${ref}]</a></sup>`;
};
const interpolateReferences = (text: string) => {
  return text.replace(referenceMatch, (_, ref) => {
    return referenceTemplate(ref);
  });
};
const interpolateFootnotes = (text: string) => {
  return text.replace(footnoteMatch, (_, value, text) => {
    return footnoteTemplate(value, text);
  });
};


function paragraphWithFootnotes(text: string) {
  return marked.Renderer.prototype.paragraph.apply(null, [
    interpolateReferences(interpolateFootnotes(text)),
  ]);
}


// ------------ 
// Highlighting 

function codeWithHighlighting(code: string, lang: string = 'plaintext') {
  const language = Prism.languages[lang] ? lang : 'plaintext';
  return (
    '<div class="not-prose">' +
    '<pre class="text-sm bg-[#FCF5E4] rounded-md p-2 overflow-x-auto font-normal">' +
    Prism.highlight(code, Prism.languages[language], language) +
    "</pre>" +
    "</div>"
  );
}

// ---------- 
// Image with captions 

function imageWithCaptions(href: string, title: string | null, text: string) {
  return (
    '<div class=" my-2 space-y-4">' +
    `<img src="${href}" alt="${text}" />` +
    (title ? `<div class='text-center italic text-sm'>${title}</div>` : '') +
    "</div>"
  )
}

// --------
// Render 

marked.use({
  renderer: {
    image: imageWithCaptions,
    code: codeWithHighlighting,
    paragraph: paragraphWithFootnotes,
  },
});

export function toHTML(markdown: string) {
  return marked(markdown);
}
