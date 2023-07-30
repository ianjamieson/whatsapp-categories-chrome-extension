export const useInsertBefore = (idOfNewDiv: string, idOfDivToAddBefore: string) => {
  const categoriesDiv = document.createElement('div');
  categoriesDiv.id = idOfNewDiv;
  const paneDiv = document.getElementById(idOfDivToAddBefore);
  const paneParent = paneDiv?.parentElement;
  paneParent?.insertBefore(categoriesDiv, paneDiv);
};