import { parse } from 'path';
import { sync } from 'glob';
import { getConfiguration } from 'intlayer-config';
import { HotModuleReplacementPlugin, type Configuration } from 'webpack';
import { IntLayerPlugin } from '.';

const { bundleDir, watchedFilesPatternWithPath } = getConfiguration();

const entry: Record<string, string> = sync(watchedFilesPatternWithPath).reduce(
  (obj, el) => {
    obj[parse(el).name] = el;
    return obj;
  },
  {} as Record<string, string>
);

const config: Configuration = {
  // Define the environment mode (development or production)
  mode: 'production', // or 'production'
  // Entry point of the application
  target: 'node', // Specifies the target environment

  entry,
  output: {
    clean: true, // Clean the output directory before emit
    library: 'IntlLayerContent',
    libraryTarget: 'umd',
    filename: '[name].bundle.js',
    path: bundleDir,
  },

  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/, // RegEx to match files ending with .ts
        use: 'ts-loader', // Use ts-loader for these files
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // Resolve TypeScript, JavaScript and JSON files
    extensions: ['.ts', '.js', '.json'],
  },
  plugins: [new IntLayerPlugin(), new HotModuleReplacementPlugin()],
};

export default config;