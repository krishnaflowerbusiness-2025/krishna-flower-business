const fs = require('fs');
for (const file of ['index.html', 'krishna-flowers-sales.html']) {
  const html = fs.readFileSync(file, 'utf8');
  const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .join('\n');

  try {
    new Function(scripts);
    console.log(file + ': OK');
  } catch (error) {
    console.error(file + ': FAIL');
    console.error(error.message);
    process.exitCode = 1;
  }
}
