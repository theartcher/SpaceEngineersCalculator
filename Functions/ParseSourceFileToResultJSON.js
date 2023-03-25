export function ParseSourceFileToResultJSON(fileObject, TotalListObject) {
  fileObject.CubeBlocks.forEach((block) => {
    const resultBlock = {
      Type: block.Id.SubtypeId,
      Components: [],
    };

    if (IsComponentsArray(block) == false) {
      const newComponent = {
        Subtype: block.Components.Component.Subtype,
        Count: block.Components.Component.Count,
      };

      resultBlock.Components.push(newComponent);
    } else {
      AddAllBlockComponentsToTotal(block, resultBlock);
    }
    TotalListObject.Blocks.push(resultBlock);
  });
}

function IsComponentsArray(componentParent) {
  return Array.isArray(componentParent.Components);
}

function AddAllBlockComponentsToTotal(block, componentsArray) {
  block.Components.forEach((component) => {
    const newComponent = {
      Subtype: component.Subtype,
      Count: component.Count,
    };
    componentsArray.Components.push(newComponent);
  });
}
