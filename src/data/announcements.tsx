import React from 'react';
import Recruiting from './announcements/recruiting.mdx';
import Week0 from './announcements/week0.mdx';
import Week1 from './announcements/week1.mdx';

const announcements = [
  <Recruiting key={0}/>,
  <Week0 key={1}/>,
  <Week1 key={2}/>
];

export default announcements;
