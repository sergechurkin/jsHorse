function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function tag_h(size, text, color) {
  return '<h' + size + ' align="center" style="color: ' + color + '">' + text + '</h' + size + '>';
}

function tag_button(text, script) {
  return '<button style="border-radius: 2px" id="' + text + '" onclick="' + script + '">' + text + '</button>';
}

function tag_form(legend, form, buttons) {
  var str = '';
  var strButtons = '';
  for (var i = 0; i < form.length; i++) {
    str = str + '<label for="' + form[i].name + '">' + form[i].label + ': <' + form[i].tag + 
      ' name="' + form[i].name + '" id="' + form[i].name + '"';
    if (form[i].tag === 'input') {
      str = str + ' type="' + form[i].type + '" class="' + form[i].tag + '" value="' + form[i].value + 
        '" onblur="numValidate(this);" onfocus="clearMess(this);">' + 
        ' <a id="error' + form[i].name + '" class="errormess"></a>';
    }
    if (form[i].tag === 'select') {
      str = str + '>';
      for (var j = 0; j < form[i].options.length; j++) {
        str = str + '<option ' + (form[i].options[j].selected ? 'selected' : '') + '>' + form[i].options[j].value + '</option>';
      }
      str = str + '</select>';
    }
    str = str + '</label><br />';
  }
  strButtons = strButtons + '<div style="margin: 5px" align="center">';
  for (var i = 0; i < buttons.length; i++) {
    strButtons = strButtons + tag_button(buttons[i].label, buttons[i].script);
  }
  strButtons = strButtons + '</div>';
  return '<fieldset><legend>' + legend + '</legend>' + str + '</fieldset>' + strButtons;
}

function numValidate(e) {
  if (isNaN(e.value) || Number(e.value) < 1) {
    e.className = "error";
    document.getElementById('error' + e.id).innerHTML = 'Enter a positive number';
  }
}

function clearMess(e) {
  e.className = "input";
    document.getElementById('error' + e.id).innerHTML = ''
}
