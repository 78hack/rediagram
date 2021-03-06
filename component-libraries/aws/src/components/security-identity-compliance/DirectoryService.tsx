import React, { FC, useMemo } from 'react';
import { IconNode, HasDependences, useLabelText } from '@rediagram/cdk';
import { resolveAsset } from '../../assets';
import { useAssertProvider } from '../../hooks/assert-provider';

export type DirectoryServiceType = 'Simple AD' | 'AD Connector' | 'AWS Managed Microsoft AD';

export type DirectoryServiceProps = {
  type?: DirectoryServiceType;
  name: string;
} & HasDependences;

function resolveImage(type?: DirectoryServiceType): string {
  switch (type) {
    case 'Simple AD':
      return resolveAsset('security-identity-compliance/DirectoryService/Simple-AD.png');
    case 'AD Connector':
      return resolveAsset('security-identity-compliance/DirectoryService/AD-Connector.png');
    case 'AWS Managed Microsoft AD':
      return resolveAsset('security-identity-compliance/DirectoryService/AWS-Managed-Microsoft-AD.png');
    default:
      return resolveAsset('security-identity-compliance/DirectoryService.png');
  }
}

function useIcon(type?: DirectoryServiceType): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(type),
      size: type === undefined ? 56 : 37,
    };
  }, [type]);
}

export const DirectoryService: FC<DirectoryServiceProps> = ({ type, name, children, upstream, downstream }) => {
  useAssertProvider();
  const icon = useIcon(type);
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return <IconNode name={name} icon={icon} label={label} upstream={upstream} downstream={downstream} />;
};

DirectoryService.displayName = 'DirectoryService';
