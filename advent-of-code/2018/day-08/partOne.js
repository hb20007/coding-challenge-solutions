const partOne = (input) => {
  input = input.split(' ').map(Number);

  function buildTree(startIndex) {
    const childNodesCount = input[startIndex];
    const metadataCount = input[startIndex + 1];

    const children = new Array(childNodesCount);
    let pointer = startIndex + 2;
    for (let i = 0; i < childNodesCount; i++) {
      children[i] = buildTree(pointer);
      pointer = children[i].next;
    }

    const next = pointer + metadataCount;
    const metadata = input.slice(pointer, next);

    return {
      children,
      metadata,
      next
    };
  }

  // Tree-walking function to sum the metadata
  function sumMetadata(node) {
    const metadataSum = node.metadata.reduce((sum, value) => sum + value);
    const childrenSum = node.children.reduce((sum, child) => sum + sumMetadata(child), 0);
    return metadataSum + childrenSum;
  }

  return sumMetadata(buildTree(0));
};

module.exports = partOne;
