import data from './projects.json' with { type: 'json' };
data.forEach(project => {
  console.log(project.id);
});

const template = document.querySelector('#projet-card-template');
const container = document.querySelector('.row');

data.forEach((project) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.project-img').src = project.img_path;
  clone.querySelector('.gh-repo').href = project.links.gh;
  clone.querySelector('.site').href = project.links.live;
  clone.querySelector('.title').textContent = project.title;
  clone.querySelector('.role').textContent = `@${project.role}`;
  const featuresContainer = clone.querySelector('.roles-features');
  project.features.forEach((feature) => {
    const span = document.createElement('span');
    span.classList.add('badge', 'text-bg-success', 'feature', 'me-1');
    span.textContent = feature;
    featuresContainer.appendChild(span);
  });
  clone.querySelector('.description').textContent = project.description;
  clone.querySelector('.stack').textContent = project.stack.join(' | ');

  container.appendChild(clone);
});
