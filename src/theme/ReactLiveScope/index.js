/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import axios from 'axios';
import { Box, Badge, Image, ChakraProvider } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ChakraProvider,
  Box,
  Badge,
  Image,
  StarIcon,
  axios,
};

export default ReactLiveScope;
