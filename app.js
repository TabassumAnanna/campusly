let students = JSON.parse(localStorage.getItem('students') || '[]');

function save() {
  localStorage.setItem('students', JSON.stringify(students));
}

function addStudent() {
  const input = document.getElementById('name');
  const name = input.value.trim();
  if (!name) return;
  students.push(name);
  input.value = '';
  save();
  render();
}

function deleteStudent(index) {
  students.splice(index, 1);
  save();
  render();
}

function render() {
  const q = document.getElementById('search').value.toLowerCase();
  const html = students
    .map((s, i) => ({ s, i }))
    .filter(x => x.s.toLowerCase().includes(q))
    .map(x => `<li>${x.s} <button class="del" onclick="deleteStudent(${x.i})">Delete</button></li>`)
    .join('');
  document.getElementById('list').innerHTML = html;
}

render();