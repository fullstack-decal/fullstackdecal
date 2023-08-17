import React, { Component, ComponentType } from "react";

import { Image, Flex, HStack, Box, Text, Icon, Link } from "@chakra-ui/react";
import { BsLinkedin, BsGlobe, BsGithub } from "react-icons/bs";
import { IoGlobeSharp, IoMail } from "react-icons/io5";

type StaffMemberProps = {
  name: string;
  image: string;
  role: string;
  linkedin: string | undefined;
  personal: string | undefined;
  bio: string;
  email: string | undefined;
  github: string | undefined;
};

type LinkIconProps = {
  href: string;
  icon: ComponentType;
};

const LinkIcon = (props: LinkIconProps) => (
  <Link href={props.href} target="_blank" rel="noreferrer" ml={2} isExternal>
    <Icon as={props.icon} h={4} transition="color 0.2s" mb="-2px" />
  </Link>
);
const StaffMember: React.FC<StaffMemberProps> = ({
  name,
  image,
  role,
  linkedin,
  personal,
  bio,
  email,
  github,
}) => (
  <Box>
    <HStack align="start" direction="row">
      <Image
        src={image}
        alt={name}
        height="13rem"
        width="10rem"
        objectFit="cover"
        shadow="2xl"
      />
      <Box p={2}>
        <Text textStyle="subtitle1" className="darkMode">
          {name}
          {personal && <LinkIcon href={personal} icon={IoGlobeSharp} />}
          {github && <LinkIcon href={github} icon={BsGithub} />}
          {linkedin && <LinkIcon href={linkedin} icon={BsLinkedin} />}
          {email && <LinkIcon href={email} icon={IoMail} />}
        </Text>
        <Text textStyle="subtitle2" mb={1}>
          {role}
        </Text>
        <Text textStyle="caption">{bio}</Text>
      </Box>
    </HStack>
  </Box>
);

export default StaffMember;
