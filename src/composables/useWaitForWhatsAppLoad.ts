export const useWaitForWhatsAppLoad = (callback) => {
  const loadCheck = setInterval(() => {
    if (document.querySelector('[aria-label="profile photo"')) {
      clearInterval(loadCheck);
      callback();
    }
  }, 500);
};