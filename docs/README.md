# API
## AppBar
| Property    | PropType | Default | Description |
| ----------- | -------- | ------- | ----------- |
| title       | `string` |         | Main Heading of the AppBar |
| icon        | `string` |         | Google MD Icon name* |
| overlay     | `bool`   | `true`  | Whether the AppBar should over the SideBar or not |
| onMenuClick | `func`   |         | Click Handler for the Menu Button |

* The Google Material Design icons and their names can be found [here](https://design.google.com/icons/)

## SideBar
| Property    | PropType | Default | Description |
| ----------- | -------- | ------- | ----------- |
| open        | `bool`   | `true`  | Whether the SideBar is visible on launch or not |
| overlay     | `bool`   | `true`  | Whether the AppBar should over the SideBar or not |
| theme       | `enum`   | `light` | Style option of `light` or `dark` |
