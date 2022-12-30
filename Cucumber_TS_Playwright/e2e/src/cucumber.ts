const common = `

    --require hooks/hooks.js
    --require e2e/src/step-definitions/**/*.step.js
`
module.exports = {
  default: `${common} features/**/*.feature`,
}
