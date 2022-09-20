Reproducible example of an issue relating to mongoose schemas and typescript 4.8.x.

To reproduce this issue, first run an `npm install` and then `npm run build`.  You should receive the below errors.  

You can switch typescript versions by using `npm install typescript@4.7.4 --save-dev` and `npm install typescript@4.8.3 --save-dev` 

You'll see that running `npm run build` produces errors when using typescript 4.8.3 but works fine on 4.7.4.

Errors:
```
DeprecationWarning: 'getMutableClone' has been ~~deprecated since v4.0.0. Use an appropriate `factory.update...` method instead, use `setCommentRange` or `setSourceMapRange`, and avoid setting `parent`.
src/main.ts:16:14 - error TS4118: The type of~~ this node cannot be serialized because its property '[iterator]' cannot be serialized.

16 export const PersonSchema = new Schema({
                ~~~~~~~~~~~~
src/main.ts:16:14 - error TS4118: The type of this node cannot be serialized because its property '[species]' cannot be serialized.

16 export const PersonSchema = new Schema({
                ~~~~~~~~~~~~
src/main.ts:16:14 - error TS4118: The type of this node cannot be serialized because its property '[toStringTag]' cannot be serialized.

16 export const PersonSchema = new Schema({
                ~~~~~~~~~~~~
src/main.ts:16:14 - error TS4118: The type of this node cannot be serialized because its property '[iterator]' cannot be serialized.

16 export const PersonSchema = new Schema({
                ~~~~~~~~~~~~
src/main.ts:16:14 - error TS4118: The type of this node cannot be serialized because its property '[species]' cannot be serialized.

16 export const PersonSchema = new Schema({
                ~~~~~~~~~~~~
src/main.ts:16:14 - error TS4118: The type of this node cannot be serialized because its property '[toStringTag]' cannot be serialized.

16 export const PersonSchema = new Schema({
                ~~~~~~~~~~~~

Found 6 error(s).
```
