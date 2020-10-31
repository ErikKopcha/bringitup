export default class Form {
  constructor (forms) {
    this.form = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с Вами свяжемся!',
      failure: 'Что-то пошло не так...'
    };

    this.path = 'assets/question.php';
  }

  init() {
    this.clearMailInputs();
    this.initPhoneMask();

    this.form.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.style.sccText = `
          margin-top: 15px;
          font-size:: 18px;
          color: grey;
        `;

        item.parentNode.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;

        const formData = new FormData(form);

        this.postData(this.path, formData)
          .then(res => {
            console.log(res);
            statusMessage.textContent = this.message.success;
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure;
          })
          .finally(() => {
            this.clearInputs();

            setTimeout(() => {
              statusMessage.remove();
            }, 6000);
          });
      });
    });
  }

  clearInputs() {
    this.inputs.forEach(el => {
      el.value = ``;
    });
  }

  initPhoneMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnt('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = '+38 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach(inp => {
      inp.addEventListener('input', createMask);
      inp.addEventListener('focus', createMask);
      inp.addEventListener('blur', createMask);
    });
  }

  clearMailInputs() {
    const txtInputs = document.querySelectorAll('[type="email"]');

    txtInputs.forEach(input => {
      input.addEventListener('keypress', function(e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    }); 
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  }
}