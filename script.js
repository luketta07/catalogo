function selectItem(element) {
      document.querySelectorAll('.elemento').forEach(item => {
        item.classList.remove('selected');
      });
      element.classList.add('selected');
      alert('Item selecionado: ' + element.querySelector('span').textContent);
    }
