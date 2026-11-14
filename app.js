const students = [];

function addStudent() {
  const name = document.getElementById('name').value;
  if (!name) return;
  students.push(name);
  document.getElementById('name').value = '';
  render();
}

function render() {
  document.getElementById('list').innerHTML =
    students.map(s => `<li>${s}</li>`).join('');
}