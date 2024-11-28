import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RoleProtected } from "src/common/decorators/role-protected.decorator";
import { UserRoleGuard } from "src/common/guards/user-role/user-role.guard";
import { ValidRoles } from "src/common/interface/valid-roles";

export function Auth(...rol: ValidRoles[]){
    return applyDecorators(
        RoleProtected(...rol),
        UseGuards(AuthGuard(),UserRoleGuard),

    );
}