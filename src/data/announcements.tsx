import React from 'react';
import Recruiting from './announcements/recruiting.mdx';
import Week0 from './announcements/week0.mdx';
import Week1 from './announcements/week1.mdx';
import Week2 from './announcements/week2.mdx';

const announcements = [
  <Recruiting key={0}/>,
  <Week0 key={1}/>,
  <Week1 key={2}/>,
  <Week2 key={3}/>
];

export default announcements;
