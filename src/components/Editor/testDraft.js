import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function DraftEditor({ htmlContent, handleChangeProperty }) {
  const editorRef = useRef(null);
  const [content, setContent] = useState(htmlContent);

  const onEditorChange = function (content, editor) {
    if (editorRef.current) {
      setContent(content);
      handleChangeProperty('htmlContent', content);
    }
  };

  const applyCustomClass = (style) => {
    if (editorRef.current) {
      const editor = editorRef.current;
      const selection = editor.selection.getContent();
      const range = editor.selection.getRng();
      const parentElement = editor.selection.getNode();

      const isWholeElementSelected = parentElement.outerHTML === selection.trim();
      if (!isWholeElementSelected) {
        const spanElement = editor.dom.create('span', { class: style });
        range.surroundContents(spanElement);
      } else {
        editor.dom.addClass(parentElement, style);
      }
  
      // Update the content in the editor
      editor.setContent(editor.getContent());
    }
  };

  const removeClass = (style) => {
    if (editorRef.current) {
      const editor = editorRef.current;
      const selection = editor.selection.getContent();
      const parentElement = editor.selection.getNode();
  
      const isWholeElementSelected = parentElement.outerHTML === selection.trim();
      if (!isWholeElementSelected) {
        const elementsWithStyle = parentElement.querySelectorAll(`span.${style}`);
        elementsWithStyle.forEach((element) => {
          const clonedElement = element.cloneNode(true);
          element.parentNode.replaceChild(clonedElement, element);
        });
      } else {
        editor.dom.removeClass(parentElement, style);
      }
  
      // Update the content in the editor
      editor.setContent(editor.getContent());
    }
  };
  
  const dialogConfig =  {
    title: 'Styles',
    body: {
      type: 'panel',
      items: [
        {
          type: 'selectbox',
          name: 'choosydata',
          label: 'Choose style',
          items: [
            { value: 'btn-primary', text: 'Button Primary' },
            { value: 'btn-secondary', text: 'Button Secondary' },
            { value: 'badge', text: 'Badge' }
          ]
        },
        {
          type: 'checkbox',
          name: 'isdog',
          label: 'tick if cat is actually a dog'
        }
      ]
    },
    buttons: [
      {
        type: 'cancel',
        name: 'closeButton',
        text: 'Remove style',
      },
      {
        type: 'submit',
        name: 'submitButton',
        text: 'Add style',
        buttonType: 'primary'
      },
    ],
    onCancel: (api) => {
      const data = api.getData();
      console.log(data.choosydata) 
      removeClass(data.choosydata)
      api.close();
    },
    onSubmit: (api) => {
      const data = api.getData();
      console.log(data.choosydata)
      applyCustomClass(data.choosydata)
      api.close();
    }
  }

  return (
    <>
      <Editor
        apiKey="YOUR_API_KEY"
        id="format-custom"
        onEditorChange={onEditorChange}
        value={content}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          selector: 'format-custom',
          height: 400,
          menubar: 'format',
          block_formats: 'p=p;h1=h1;h2=h2;h3=h3;h4=h4;h5=h5;h6=h6;',
          plugins: 'link image importcss table',
          content_css: '/DraftEditor.css',
          toolbar:
            'formatting alignment | backcolor forecolor | ' +
            'blocks linkUnlink dialog-example-btn',
          toolbar_groups: {
            formatting: {
              icon: 'bold',
              tooltip: 'Formatting',
              items: 'bold italic underline | superscript subscript'
            },
            linkUnlink: {
              icon: 'link',
              tooltip: 'Link Unlink',
              items: 'link unlink'
            }
          },
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          setup: (editor) => {
            editor.ui.registry.addGroupToolbarButton('alignment', {
              icon: 'align-left',
              tooltip: 'Alignment',
              items: 'alignleft aligncenter alignright | alignjustify',
            });
            editor.ui.registry.addButton('dialog-example-btn', {
              icon: 'style',
              onAction: () => editor.windowManager.open(dialogConfig)
            })
          },
        }}
      />
    </>
  );
}
