const partTwo = input => {
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

  function getNodeValue(node) {
    if (node.children.length === 0) {
      return node.metadata.reduce((sum, value) => sum + value);
    }

    return node.metadata.reduce((sum, index) => {
      const value = index > node.children.length ? 0 : getNodeValue(node.children[index - 1]);
      return sum + value;
    }, 0);
  }

  return getNodeValue(buildTree(0));
};

module.exports = partTwo;
