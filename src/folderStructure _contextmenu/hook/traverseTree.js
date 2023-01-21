const useTraversTree = () => {
  function insertNode(tree, folderId, name, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: name,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = tree.items.map((obj) =>
      insertNode(obj, folderId, name, isFolder)
    );
    return { ...tree, items: latestNode };
  }
  return { insertNode };
};

export default useTraversTree;
