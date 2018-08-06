/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+javascript_foundation
 * @format
 */

'use strict';

const path = require('path');

const ROOT_PATH = path.resolve(__dirname, 'basic_bundle');

module.exports = {
  cacheStores: [],
  maxWorkers: 1,
  projectRoot: ROOT_PATH,
  reporter: {update() {}},
  transformModulePath: require.resolve('metro/src/reactNativeTransformer'),
  watchFolders: [path.resolve(__dirname, '../lib/polyfills')],
  server: {port: 10028},
  resolver: {
    useWatchman: false,
  },
  transformer: {
    assetRegistryPath: path.join(ROOT_PATH, 'AssetRegistry'),
  },
};
