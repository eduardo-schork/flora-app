import { FontAwesome } from '@expo/vector-icons';

import Colors from '../shared/styles/Colors';

function Icon({
    color = Colors.primary,
    size = 28,
    ...props
}: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color?: string;
    size?: number;
}) {
    return <FontAwesome {...{ ...props, color, size }} />;
}

export default Icon;
