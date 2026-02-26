import "./components.css";
import { renderInMono } from "../utils/renderInMono";

const renderDataDisplay = (markup) => renderInMono(markup);

export default {
  title: "Components/Data Display"
};

export const List = {
  render: () =>
    renderDataDisplay(`
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
    `)
};

export const ListItem = {
  render: () =>
    renderDataDisplay(`
      <ul>
        <li>This single list item story targets list-item styling.</li>
      </ul>
    `)
};

export const Table = {
  render: () =>
    renderDataDisplay(`
      <table class="component-table">
        <thead>
          <tr>
            <th>Version</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.0</td>
            <td>Stable</td>
          </tr>
          <tr>
            <td>1.1</td>
            <td>Beta</td>
          </tr>
        </tbody>
      </table>
    `)
};

export const TableCells = {
  render: () =>
    renderDataDisplay(`
      <table class="component-table">
        <tbody>
          <tr>
            <th>Cell header</th>
            <td>Cell value</td>
          </tr>
          <tr>
            <th>Second header</th>
            <td>Second value</td>
          </tr>
        </tbody>
      </table>
    `)
};
