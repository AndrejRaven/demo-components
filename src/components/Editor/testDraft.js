import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function DraftEditor({ htmlContent, handleChangeProperty }) {
  const editorRef = useRef(null);
  const [content, setContent] = useState(htmlContent);

  const onEditorChange = function (a, editor) {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
      console.log(editorRef.current.getContent())
      handleChangeProperty('htmlContent', editorRef.current.getContent());
    }
  };

  const applyCustomClass = () => {
    if (editorRef.current) {
      const selection = editorRef.current.selection.getContent();
      const modifiedContent = `<button class="prm-button">${selection}</button>`;
      editorRef.current.execCommand("mceInsertContent", false, modifiedContent);
    }
  };

  return (
    <>
      <Editor
        apiKey="YOUR_API_KEY"
        onEditorChange={onEditorChange}
        value={content}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 400,
          menubar: true,
          menu: {
            styles: { title: 'Styles', items: 'custom-primary-button' }
          },
          style_formats: [
            { name: 'custom-primary-button', title: 'Primary button', inline: 'span', classes: ['prm-button'] },
          ],
          plugins: 'link image formatselect',
          toolbar:
            '| custom-primary-button backcolor forecolor | ' +
            'bold italic | alignment | ' +
            'bullist numlist | outdent indent | ' +
            'link unlink image',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          setup: (editor) => {
            editor.ui.registry.addGroupToolbarButton('alignment', {
              icon: 'align-left',
              tooltip: 'Alignment',
              items: 'alignleft aligncenter alignright | alignjustify',
            });

            editor.ui.registry.addButton('custom-primary-button', {
              icon: 'insert-table',
              tooltip: 'Apply Custom Class',
              onAction: applyCustomClass,
            });
          },
        }}
      />
    </>
  );
}
