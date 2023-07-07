

const EditorBlockPicker = ({ editorState, setEditorState, EditorState, SelectionState }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
    console.log(selection)

 

  const currentInlineStyles = editorState.getCurrentInlineStyle();
  const hasBold = currentInlineStyles.has('BOLD');
  const hasItalic = currentInlineStyles.has('ITALIC');
  const hasUnderline = currentInlineStyles.has('UNDERLINE');



  return (
    <div style={{ background: 'silver', padding: '10px', position: 'fixed', bottom: '0'}}>
      <a href={blockType}>
        {blockType}</a>
        <a href={hasBold}>{hasBold && ' >'}
        {hasBold && <span>Bold</span>}
        {hasItalic && <span>.Italic</span>}
        {hasUnderline && <span>.Underline</span>}
      </a>
    </div>
  );
};

export default EditorBlockPicker;
