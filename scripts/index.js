const themeSwitch = document.getElementById("switch");
const html = document.documentElement;
console.log(html);

const localTheme = localStorage.getItem("@interactgoianiaoeste/Theme");
console.log(localTheme);
if (localTheme) {
  if (localTheme === "dark") {
    html.classList.add("dark");
    themeSwitch.checked = true;
    document.getElementById("img").src = "./img/logo-dark.png";
    
  } else {
    html.classList.remove("dark");
    themeSwitch.checked = false;
    document.getElementById("img").src = "./img/logo.png";
  }
} else {
  localStorage.setItem("@interactgoianiaoeste/Theme", "dark");
  location.reload();
  document.getElementById("img").src = "./img/logo-dark.png";
}

themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  if (checked) {
    html.classList.add("dark");
    localStorage.setItem("@interactgoianiaoeste/Theme", "dark");
    document.getElementById("img").src = "./img/logo-dark.png";
    
  } else {
    html.classList.remove("dark");
    localStorage.setItem("@interactgoianiaoeste/Theme", "light");
    document.getElementById("img").src = "./img/logo.png";
  }
});

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
  toastsHandler.createToast({
    type: 'system',
    icon: 'check-circle',
    message: 'Chave PIX copiada para a área de transferência!',
    duration: 5000
  });
}


// Below code can be easily used in vanilla js, you just need to copy below code in your js file, and remove all interfaces & types. (': void', ': string' etc... are types too) 
var SwipeHandler = /** @class */ (function () {
  function SwipeHandler() {
  }
  SwipeHandler.prototype.getSwipeDirection = function (_a) {
      var touchstartX = _a.touchstartX, touchstartY = _a.touchstartY, touchendX = _a.touchendX, touchendY = _a.touchendY;
      var delx = touchendX - touchstartX;
      var dely = touchendY - touchstartY;
      if (Math.abs(delx) > Math.abs(dely)) {
          return delx > 0 ? 'right' : 'left';
      }
      else if (Math.abs(delx) < Math.abs(dely)) {
          return dely > 0 ? 'down' : 'up';
      }
      return 'tap';
  };
  return SwipeHandler;
}());
var ToastsHandler = /** @class */ (function () {
  function ToastsHandler(swipeHandler) {
      this.swipeHandler = swipeHandler;
      this.defaultToastDuration = 3000;
      this.cssAnimationDuration = 270; // css duration (in & out) + 20ms
      this.icons = [
          {
              name: 'check-circle',
              svg: "\n        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>\n          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'/>\n        </svg>\n      "
          },
          {
              name: 'info-circle',
              svg: "\n        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>\n          <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/>\n        </svg>\n      "
          },
          {
              name: 'exclamation-circle',
              svg: "\n        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>\n          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'/>\n        </svg>\n      "
          },
          {
              name: 'exclamation-triangle',
              svg: "\n        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>\n          <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/>\n        </svg>\n      "
          },
          {
              name: 'x-lg',
              svg: "\n        <svg xmlns='http://www.w3.org/2000/svg' class='t-close' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>\n          <path d='M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z'/>\n        </svg>\n      "
          }
      ];
      this.createToastsContainer();
      // below line enable toasts creation from DOM buttons; can be removed if useless
      this.createToastFromButton();
  }
  ToastsHandler.prototype.createToastsContainer = function () {
      var toastsContainer = document.createElement('div');
      toastsContainer.classList.add('toasts-container');
      document.querySelector('body').appendChild(toastsContainer);
      this.toastsContainer = document.querySelector('.toasts-container');
  };
  ToastsHandler.prototype.createToastFromButton = function () {
      var _this = this;
      document.addEventListener('click', function (e) {
          // check is the right element clicked
          if (!e.target.matches('.btn-toast'))
              return;
          var config = {
              type: e.target.dataset.type,
              icon: e.target.dataset.icon,
              message: e.target.dataset.message,
              duration: e.target.dataset.duration ? parseInt(e.target.dataset.duration, 10) : undefined
          };
          _this.createToast(config);
      }, false);
  };
  ToastsHandler.prototype.createToast = function (_a) {
      var _this = this;
      var type = _a.type, icon = _a.icon, message = _a.message, duration = _a.duration;
      var toastRef = this.createToastContainer(type);
      this.createElement(toastRef, 't-icon', this.icons.find(function (item) { return item.name === icon; }).svg);
      this.createElement(toastRef, 't-message', message);
      this.addCloseButton(toastRef);
      this.addProgressBar(toastRef, duration);
      // toasts can be closed on right swipe, comment this line if it's useless in your case
      this.observeRightSwipe(toastRef);
      this.toastsContainer.appendChild(toastRef);
      // wait just a bit to add active class to the message to trigger animation
      setTimeout(function () { return toastRef.classList.add('active'); }, 20);
      // if duration is 0, toast message will not be closed
      if (duration === 0)
          return;
      // apply custom or default duration before toast deletion
      setTimeout(function () {
          toastRef.classList.remove('active');
          // wait for the end of the animation to remove the element from the DOM
          setTimeout(function () { return toastRef.remove(); }, _this.cssAnimationDuration);
      }, duration ? duration : this.defaultToastDuration);
  };
  ToastsHandler.prototype.createToastContainer = function (type) {
      var toastRef = document.createElement('div');
      toastRef.classList.add('toast');
      toastRef.classList.add(type);
      return toastRef;
  };
  ToastsHandler.prototype.createElement = function (toastRef, className, html) {
      var element = document.createElement('div');
      element.classList.add(className);
      element.innerHTML = html;
      toastRef.appendChild(element);
      return element;
  };
  ToastsHandler.prototype.addCloseButton = function (toastRef) {
      var _this = this;
      var closeButton = this.createElement(toastRef, 't-close', this.icons.find(function (icon) { return icon.name === 'x-lg'; }).svg);
      closeButton.addEventListener('click', function () { return _this.removeToast(toastRef); }, false);
  };
  ToastsHandler.prototype.addProgressBar = function (toastRef, duration) {
      // duration is infinite => no progress bar
      if (duration === 0)
          return;
      if (!duration || duration !== 0) {
          var progressBar = document.createElement('div');
          progressBar.classList.add('t-progress-bar');
          // custom duration need's to be added in scss file
          duration && progressBar.classList.add("t-" + duration);
          toastRef.appendChild(progressBar);
      }
  };
  ToastsHandler.prototype.removeToast = function (toastRef) {
      toastRef.classList.remove('active');
      // we wait for the end of the animation to remove the element from the DOM
      setTimeout(function () { return toastRef.remove(); }, this.cssAnimationDuration);
  };
  ToastsHandler.prototype.observeRightSwipe = function (toastElem) {
      var _this = this;
      var touchstartX = 0, touchstartY = 0, touchendX = 0, touchendY = 0;
      toastElem.addEventListener('touchstart', function (event) {
          // needed to avoid weird behavior on swipe
          window.document.body.style.overflow = 'hidden';
          touchstartX = event.changedTouches[0].screenX;
          touchstartY = event.changedTouches[0].screenY;
      }, { passive: true });
      toastElem.addEventListener('touchend', function (event) {
          window.document.body.style.overflow = 'unset';
          touchendX = event.changedTouches[0].screenX;
          touchendY = event.changedTouches[0].screenY;
          var swipeConfig = {
              touchstartX: touchstartX,
              touchstartY: touchstartY,
              touchendX: touchendX,
              touchendY: touchendY
          };
          _this.swipeHandler.getSwipeDirection(swipeConfig) === 'right' && _this.removeToast(toastElem);
      }, { passive: true });
  };
  return ToastsHandler;
}());
var swipeHandler = new SwipeHandler();
var toastsHandler = new ToastsHandler(swipeHandler);

